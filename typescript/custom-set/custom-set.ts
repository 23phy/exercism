export default class CustomSet {
  constructor(private readonly m_data: Array<number> = []) { }

  public empty(): boolean {
    return this.m_data.length === 0;
  }

  public contains(element: number): boolean {
    return this.m_data.includes(element);
  }

  public subset(subset: CustomSet): boolean {
    if (this.m_data.length > subset.m_data.length) {
      return false;
    }

    return this.m_data.every((element) => subset.contains(element));
  }

  public disjoint(subset: CustomSet): boolean {
    return this.intersection(subset).empty();
  }

  public eql(set: CustomSet): boolean {
    if (this.m_data.length !== set.m_data.length) {
      return false;
    }
    return this.difference(set).empty();
  }

  public add(element: number): CustomSet {
    if (!this.contains(element)) {
      this.m_data.push(element);
    }
    return this;
  }

  public intersection(set: CustomSet): CustomSet {
    return new CustomSet(this.m_data.filter((element: number) => set.contains(element)));
  }

  public difference(set: CustomSet): CustomSet {
    return new CustomSet(this.m_data.filter((element: number) => !set.contains(element)));
  }

  public union(set: CustomSet): CustomSet {
    return new CustomSet([...this.m_data, ...set.difference(this).m_data]);
  }
}