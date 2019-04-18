async function feed(parent, args, context) {
  const { skip, first, filter, orderBy } = args;
  const where = filter
    ? {
        OR: [{ description_contains: filter }, { url_contains: filter }]
      }
    : {};

  const links = await context.prisma.links({
    where,
    first,
    skip,
    orderBy
  });

  const count = await context.prisma
    .linksConnection({
      where
    })
    .aggregate()
    .count();

  return {
    links,
    count
  };
}

module.exports = {
  feed
};
